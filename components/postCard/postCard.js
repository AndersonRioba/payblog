import { Card, Button } from "flowbite-react";

export default function PostCard () {
    return (
        <Card
        className="mb-3 mt-3"
        //horizontal={true}
        //imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
        >
          <div className='flex'>
            <img src='https://flowbite.com/docs/images/blog/image-4.jpg'
              className='mb-3 h-22 w-24 mr-5' />
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice Assistant
              </h3>
              <h5 className="font-normal text-gray-700 dark:text-gray-400">
                I asked GPT-3 to pretend to be the smart brain of my house.
              </h5>
              <div className='flex justify-end'>
                <Button >
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </Card>
    )
}