import { ClipboardIcon } from "@heroicons/react/outline";
import { NumberInput, Select, Textarea, TextInput } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { client } from "../../lib/sanity.server";
import { useListSubCategoriesQuery } from "../apollo-components";
import toast, { Toaster } from "react-hot-toast";
import { createReadStream } from "fs";
import { basename } from "path";
import { useRouter } from "next/router";
import slugify from "slugify";
import { useMapEvents, MapContainer, TileLayer } from "react-leaflet";
interface Location {
  lat: number;
  lng: number;
}

export function CreateAdvertForm() {
  const [location, setLocation] = useState<Location>(null);

  const [imagesAssets, setImagesAssets] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const { data } = useListSubCategoriesQuery();
  const listSubCategories =
    data && data?.allSubcategory ? data?.allSubcategory : [];
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    //   resolver: zodResolver(validationSchema),
    shouldUseNativeValidation: true, //show native error messages on the browser
    mode: "onChange", // show errors as you type
    defaultValues: {
      title: "",
      description: "",
      contact: "",
      subcategory: "",
      location: {},
      slug: {
        current: undefined,
      },
      price: 0,
      image: {
        asset: { url: undefined },
      },
    },
  });
  // function MyComponent() {
  //   const map = useMapEvents({
  //     click: () => {
  //       map.locate();
  //     },
  //     locationfound: (location) => {
  //       console.log("location found:", location);
  //        setValue("location",{
  //         lat: location.latlng.lat,
  //         lng: location.latlng.lng
  //       } , {
  //               shouldValidate: true,
  //               shouldDirty: true,
  //               shouldTouch: true,
  //             })
  //       // setLocation({
  //       //   lat: location.latlng.lat,
  //       //   lng: location.latlng.lng
  //       // })
  //     },
  //   });
  //   return null;
  // }

  // function MyMapComponent() {
  //   return (
  //     <MapContainer center={[50.5, 30.5]} zoom={13}>
  //       <TileLayer
  //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />
  //       <MyComponent />
  //     </MapContainer>
  //   );

  return (
    <>
      <form
        className="flex flex-col w-1/3 mx-auto space-y-5"
        onSubmit={handleSubmit(async (input) => {
          await client
            .create({
              _type: "advert",
              title: input.title,
              description: input.description,
              contact: input.contact,
              slug: {
                current: slugify(input.title, { lower: true }),
              },
              subcategory: {
                _type: "reference",
                _ref: input.subcategory,
              },
              price: input.price,
              location: input.location,
              image: {
                _type: "image",
                asset: {
                  _type: "image",
                  _ref: imagesAssets?._id,
                },
              },
            })
            .then((res) => {
              // console.log(`Ad was created, document ID is ${res._id}`);
              // reset();
              // toast.success(`Ad was created, document ID is ${res._id}`);
              router.push(`/advert/${res._id}`);
            });
        })}
      >
        <TextInput label="titre" {...register("title")} placeholder="title" />
        <Select
          classNames={{
            input: errors.subcategory ? "error-input" : "input",
            label: "text-sm font-medium text-gray-600 font-sans",
            dropdown: "font-sans",
          }}
          label="sous catégorie"
          placeholder="Veuillez sélectionner une catégorie"
          searchable
          required
          // nothingFound={f({ id: Translation.no_item })}
          value={watch("subcategory")}
          onChange={(value) =>
            setValue("subcategory", value, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            })
          }
          data={listSubCategories.map((subcategory) => {
            return {
              label: subcategory.name,
              value: subcategory._id,
            };
          })}
          // icon={<ClipboardIcon className="w-5 h-5 text-sky-500" />}
        />
        <TextInput
          label="contact"
          {...register("contact")}
          placeholder="contact"
        />
        <Textarea
          label="Description"
          {...register("description")}
          placeholder="description"
          required
          // className="p-3 border border-gray-300 rounded focus:outline-none"
        />
        {/* <TextInput
          type="text"
          {...register("location")}
          placeholder="location"
        /> */}

        <NumberInput
          // defaultValue={0}
          label="price"
          value={watch("price")}
          placeholder="price"
          onChange={(value) =>
            setValue("price", value, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            })
          }
        />
        <input
          id="photo"
          type="file"
          accept="image/*"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (event?.target?.files?.[0]) {
              const file = event.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setPreviewImage(reader.result as string);
              };
              reader.readAsDataURL(file);
              client.assets
                .upload("image", file, {
                  contentType: file.type,
                  filename: file.name,
                })
                .then((document) => {
                  setImagesAssets(document);
                });
            }
          }}
          // className={errors.photo ? "error-input" : "input"}
        />
        {previewImage && (
          <img src={previewImage} className="object-contain h-60 w-60" />
        )}

        <button className="w-full button-primary">submit</button>
      </form>
      <Toaster />
    </>
  );
}
