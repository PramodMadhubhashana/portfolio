import { Blocks, Gem, } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ServiceData = [
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Mobile App Development',
        description: 'I specialize in mobile app development using Flutter, Kotlin, React Native, and Java, focusing on creating versatile and efficient software solutions.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'I excel in web development using HTML, CSS, Bootstrap, PHP, and Tailwind CSS, creating responsive and dynamic websites with a focus on user experience.'
    }
];

const Service = () => {
    return (
        <div className="flex flex-col container max-w-[1100px] pt-10">
            <div className="flex flex-col">
                <div className="container flex justify-center pb-10">
                    <p className="text-2xl sm:text-4xl sm:pb-4 font-bold relative gradient-text align-middle justify-center ">
                        My Service
                    </p>
                </div>
                <div className="flex-col pt-14 grid xl:grid-cols-2 justify-center gap-y-20 xl:gap-y-24 ">
                    {ServiceData.map((item, index) => {
                        return (
                            <Card key={index} className='w-full max-w-[424px]  h-auto sm:h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative hover:shadow-2xl hover:shadow-blue-600'>
                                <CardHeader className='text-white absolute -top-[60px]'>
                                    <div className="w-[140px] h-[80px] bg-gradient-to-r from-blue-600 to-[#07D2FB] flex justify-center items-center">
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className='text-center'>
                                <CardTitle className='mb-4 text-xl sm:text-4xl'>{item.title}</CardTitle>
                                <CardDescription className='text-sm sm:text-lg'>{item.description}</CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service