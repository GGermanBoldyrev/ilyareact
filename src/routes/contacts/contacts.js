import React from 'react';
import s from './contact.module.scss';

const Contacts = () => {
    return (
        <div className={s.page}>
            <div className={s.block}>
                <div className={s.title}>
                    Связаться со мной
                </div>
                <div className={s.content}>
                    <div className={s.text}>
                        <div>
                            Если у вас имеются какие-либо вопросы, пожалуйста, напишите мне в личных сообщениях в одной из социальных сетей, либо на почту.
                        </div>
                        <div>
                            If you have any questions, please fell free to drop me a line.
                        </div>
                        <div className={s.button}>
                            <a href="tel:+79219966685">Позвонить мне</a>
                        </div>
                    </div>
                    <div className={s.links}>
                        <div className={s.subtitle}>
                            Find me elsewhere
                        </div>
                        <div className={s.line}></div>
                        <div className={s.contactLinks}>
                            <a href="https://www.behance.net/tarasovilya" target="_blank">BEHANCE</a>
                            <a href="https://vk.com/tarasovilya" target="_blank">VK</a>
                            <a href="https://t.me/vlardingen" target="_blank">TELEGRAM</a>
                            <a href="mailto:tarasov.ilia010@gmail.com&body=Здравствуйте, Илья.?subject=Работа" target="_blank">tarasov.ilia010@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;