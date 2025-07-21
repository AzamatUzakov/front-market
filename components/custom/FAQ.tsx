"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const FAQ: React.FC = () => {
    return (
        <>
            <div className="w-[90%] md:w-[73%] xl:w-[65%] 2xl:w-[50%] mx-auto mt-15  md:mt-20 lg:mt-24 xl:mt-28  2xl:mt-32 
">
                <h2 className="text-center text-2xl font-bold mb-4 mt-15 text-[#171212] lg:text-4xl">Часто задаваемые вопросы</h2>
                <Accordion type="single" collapsible>
                <AccordionItem className="mt-3 border-0 bg-lime-100  rounded-[12px] py-1.5 px-4 cursor-pointer" value="item-1">
                    <AccordionTrigger className="font-semibold text-sm no-underline hover:no-underline cursor-pointer">Сколько стоит доставка и сколько она занимает времени?</AccordionTrigger>
                    <AccordionContent className="text-[#8A7061] text-sm">
                        Доставка осуществляется в течение одного дня. Стоимость зависит от района доставки и уточняется при оформлении заказа.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-3 border-0 bg-lime-100  rounded-[12px] py-1.5 px-4 cursor-pointer" value="item-2">
                    <AccordionTrigger className="font-semibold text-sm no-underline hover:no-underline cursor-pointer">Доставляете ли вы в мой город/регион?</AccordionTrigger>
                    <AccordionContent className="text-[#8A7061] text-sm">
                        Мы осуществляем доставку только по городу Самарканд.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-3 border-0 bg-lime-100  rounded-[12px] py-1.5 px-4 cursor-pointer" value="item-3">
                    <AccordionTrigger className="font-semibold text-sm no-underline hover:no-underline cursor-pointer">Как отследить мой заказ?</AccordionTrigger>
                    <AccordionContent className="text-[#8A7061] text-sm">
                        Вы можете отследить статус заказа в разделе «Профиль» на сайте.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-3 border-0 bg-lime-100  rounded-[12px] py-1.5 px-4 cursor-pointer" value="item-4">
                    <AccordionTrigger className="font-semibold text-sm no-underline hover:no-underline cursor-pointer">Какие способы оплаты вы принимаете?</AccordionTrigger>
                    <AccordionContent className="text-[#8A7061] text-sm">
                        Мы принимаем наличные, а также онлайн-оплату через Payme, Click, Humo и Uzcard.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-3 border-0 bg-lime-100  rounded-[12px] py-1.5 px-4 cursor-pointer" value="item-5">
                    <AccordionTrigger className="font-semibold text-sm no-underline hover:no-underline cursor-pointer">Можно ли оплатить при получении (наложенный платёж)?</AccordionTrigger>
                    <AccordionContent className="text-[#8A7061] text-sm">
                        Да, вы можете оплатить заказ при получении.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-3 border-0 bg-lime-100  rounded-[12px] py-1.5 px-4 cursor-pointer" value="item-6">
                    <AccordionTrigger className="font-semibold text-sm no-underline hover:no-underline cursor-pointer">Можно ли вернуть товар, если он не подошёл?</AccordionTrigger>
                    <AccordionContent className="text-[#8A7061] text-sm">
                        Да, если товар не повреждён и в оригинальной упаковке, вы можете вернуть его, и мы вернём деньги.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-3 border-0 bg-lime-100  rounded-[12px] py-1.5 px-4 cursor-pointer" value="item-7">
                    <AccordionTrigger className="font-semibold text-sm no-underline hover:no-underline cursor-pointer">Что делать, если пришёл повреждённый товар?</AccordionTrigger>
                    <AccordionContent className="text-[#8A7061] text-sm">
                        Если товар повреждён, пожалуйста, свяжитесь с нами — мы оперативно решим проблему.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-3 border-0 bg-lime-100  rounded-[12px] py-1.5 px-4 cursor-pointer" value="item-8">
                    <AccordionTrigger className="font-semibold text-sm no-underline hover:no-underline cursor-pointer">Как с вами связаться?</AccordionTrigger>
                    <AccordionContent className="text-[#8A7061] text-sm">
                            Вы можете позвонить нам по номеру +998(99)-584-63-12 или написать в <a href="https://t.me/NKernel"><u>Telegram</u></a>.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem className="mt-3 border-0 bg-lime-100  rounded-[12px] py-1.5 px-4 cursor-pointer" value="item-9">
                    <AccordionTrigger className="font-semibold text-sm no-underline hover:no-underline cursor-pointer">Нужно ли регистрироваться для оформления заказа?</AccordionTrigger>
                    <AccordionContent className="text-[#8A7061] text-sm">
                        Да, регистрация обязательна для оформления заказа и отслеживания статуса доставки.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            </div>
        </>
    );
}

export default FAQ;