"use client";

import React from 'react';
import { Input, Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

const list = [
  {
    title: "Orange",
    img: "https://media.istockphoto.com/id/1131608539/photo/a-lot-of-oranges-with-some-cut-in-half-and-leaves.jpg?s=612x612&w=is&k=20&c=Mb4OCaLQ5JMaLPbPjcMfBxiYIUmXc4KBEMf5CRoqKvs=",
    price: "$5.50",
  },
  {
    title: "Raspberry",
    img: "https://media.istockphoto.com/id/1263891766/photo/collection-of-fresh-red-raspberries.jpg?s=1024x1024&w=is&k=20&c=fIHUupGt8I15pf40owhuD6Cgn302u2TBktLfLOKiEbY=",
    price: "$10.00",
  },
  {
    title: "Lemon",
    img: "https://media.istockphoto.com/id/1404188749/photo/lemons-in-the-lemon-tree.jpg?s=612x612&w=is&k=20&c=aIKVvTwSQhcI0zI2-iZnw9OMgnr-s62ZaKYQPGotrxw=",
    price: "$5.30",
  },
  {
    title: "Avocado",
    img: "https://media.istockphoto.com/id/1332477907/photo/fresh-organic-avocado-at-farmers-market-healthy-food.jpg?s=612x612&w=is&k=20&c=EB3KfFfcjW7SsF6byZLeFvNkCkXFrDF92YITmH6w09E=",
    price: "$15.70",
  },
  {
    title: "Banana",
    img: "https://media.istockphoto.com/id/1350708696/photo/colombian-fruits-and-vegetables.jpg?s=612x612&w=is&k=20&c=3WRmDfNnj9Z9tkJR71jwpON5F3x0gNGEaXXQuv4fvd8=",
    price: "$7.50",
  },
  {
    title: "Watermelon",
    img: "https://media.istockphoto.com/id/938827438/photo/bulk-watermelons-from-a-street-market.jpg?s=612x612&w=is&k=20&c=OD0rT0uOBD9WlwnSc625lGcKT1KVoBS1WqLOxKS6Cnc=",
    price: "$12.20",
  },
];

const Market = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center h-screen overflow-y-scroll">
      <div className='mx-auto w-full max-w-3xl p-6 md:p-0 pt-2 flex flex-col md:w-[500px] mb-16'>
      <div className="relative pt-3 text-white">
        <div className="absolute flex items-center top-4 right-4 md:right-6 gap-3">
          <i className='bx bxl-messenger text-xl'></i>
          <i className='bx bxs-cart-alt text-xl'></i>
        </div>
        <h1 className="text-center text-md md:text-2xl mb-6">Market</h1>
      </div>
      
      <div className="w-full max-w-3xl mb-16">
        <Input
          clearable
          fullWidth
          label="Search"
          type="search"
          placeholder="Search to buy..."
          required
          className="mb-4"
          classNames={{
            label: "text-black/50 ",
            input: [
              "bg-transparent",
              "text-white/90",
              "placeholder:text-white/100",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "group-data-[focus=true]:bg-default-200/50",
              "!cursor-text",
            ],
          }}
        />

        {/* Add a "Sell Your Goods" Button */}
        <div className='flex flex-row justify-between md:justify-start md:gap-2'>
        <Button className="mb-5 text-sm p-4"  shadow color="primary" auto>
          Sell Your Goods
        </Button>
        <Button className="mb-5 text-sm p-4"  shadow color="primary" auto>
          Current Bazar Update
        </Button>
        </div>

        {/* Demo Posts */}
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-3">
          {list.map((item, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border border-gray-300 shadow-xl"
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between p-3">
                <b className='text-white'>{item.title}</b>
                <p className="text-white/80">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Market;
