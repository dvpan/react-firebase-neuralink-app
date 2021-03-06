import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translations: {
                    //Header
                    "Главная": "Home",
                    "Панель управления": "Dashboard",
                    "Эмулятор": "Emulator",
                    "Вход": "Sign In",
                    "Выход": "Sign Out",
                    "Регистрация": "Sign Up",
                    "Привет": "Hello",

                    // Home Page
                    "Быстродействие": "Performance",
                    "Безопасность": "Safety",
                    "Будущее": "Future",
                    "Нейроинтерфейс мозг-машина уже доступен": "Brain–computer interface is already available",
                    "Разработанный специально для повседневного использования и комфорта НЕЙРОЛИНК Н1 оснащен сухими электродами, которые обеспечивают точную и надежную регистрацию электрической активности головного мозга.": "Designed specifically for everyday use and comfort, NEUROLINK H1 is equipped with dry electrodes that provide accurate and reliable recording of brain electrical activity.",
                    "Купить": "Buy",
                    "Узнать больше": "Learn more",

                    //Dashboard
                    "Здоровье": "Health",
                    "Использование": "Usage",
                    "Уведомления": "Notification",
                    "Настройки": "Settings",
                    "Справка": "Support",
                    "Текущая неделя": "This week",
                    "Вчера": "Yersterday",
                    "24 часа": "24 hours",
                    "Последний час": "Last hour",
                    "Пульс": "Pulse",
                    "Кровяное давление": "Blood pressure",
                    "Нет данных за выбранный период": "No data stored in the selected period",
                    "Усталость": "Fatigue",
                    "Жажда": "Thirst",
                    "Трезвость": "Sobriety",
                    "Таким ваше здоровье было": "Last update time is",

                    // Sign In & Sign Up
                    "Революционно новый нейроинтерфейс": "Revolutionary new neuro interface",
                    "Наш многолетний опыт (более 25 лет) и профессионализм дают возможность создавать технологии нового уровня и расширяют границы для разработчиков и исследователей в самых разных областях человеческих знаний.": "The device, created by a team of scientists with more than 25 years of experience in professional medical equipment engineering, is easy to set up and perfect for wearing for a long time.",
                    "Поле не может быть пустым": "The field cannot be empty",
                    "Введите свои данные ниже": "Enter your details below",
                    "Введите ваш пароль": "Enter your password",
                    "Пароль": "Password",
                    "Пароль еще раз": "Confirm Password",
                    "Пароли не совпадают": "Password doesn't match",
                    "Подтвердите ваш пароль": "Confirm your password",
                    "ID устройства содержит 10 символов": "Device ID contains 10 characters",
                    "10 символов на обратной стороне устройства": "10 characters on the back of the device",
                    "Еще нет аккаунта?": "Don't have an account yet?",
                    "Уже есть аккаунт?": "Already have an account?",
                    "Зарегистрироваться": "Sign Up",
                    "Войти": "Sign In",
                    "Ошибка входа. Проверьте имя email и пароль": "Your email and/or password do not match",
                    "Добро пожаловать на НЕЙРОЛИНК": "Welcome to NEUROLINK",
                    "Перед началом работы заполните форму ниже": "Before you start, fill out the form below",
                    "Введенные данные некорректны": "Sign up error. Check the entered data",
                    "Имя": "First Name",
                    "Фамилия": "Last Name",
                    "ID устройства": "Device ID",

                    // Footer
                    "Вы хотите получать индивидуальные предложения?": "Do you want to receive our newsletter?",
                    "Оставьте свой email, чтобы оставаться на связи!": "Send us your email and we'll get in touch!",
                    "Ваш Email": "Enter Email",
                    "Отправить": "Send",
                    "О технологии": "Technology",
                    "Как это работает": "How it works",
                    "Патенты": "Patents",
                    "Презентации": "Presentations",
                    "О компании": "Company",
                    "О нас": "About Us",
                    "Сотрудничество": "Cooperation",
                    "Вакансии": "Vacancies ",
                    "Магазин": "Shop",
                    "Варианты оплаты": "Payment options",
                    "Состояние заказа": "Order status",
                    "Помощь при покупке": "Purchase assistance",
                    "Связь с нами": "Contact us",
                    "Все права защищены": "All rights reserved",

                    // Emulator
                    "Добавить случайные данные": "Add random data",
                    "Обновить": "Randomize",
                    "Добавить значения": "Add",
                    "мм.рт.ст": "mmHg",
                    "уд./мин": "bpm",

                    // Titles
                    "Панель управления - Нейролинк": "Dashboard - Нейролинк",
                    "Здоровье - Нейролинк": "Health - Нейролинк",
                    "Эмулятор - Нейролинк": "Emulator - Нейролинк",
                    "Нейролинк": "Нейролинк",
                    "Вход - Нейролинк": "Sign In - Нейролинк",
                    "Регистрация - Нейролинк": "Sign Up - Нейролинк",

                    "currentLang": "EN",
                    "404 Страница не найдена": "404 Page not found"
                }
            },

            ru: {
                translations: {
                    //Header
                    "Главная": "Главная",
                    "Панель управления": "Панель управления",
                    "Эмулятор": "Эмулятор",
                    "Вход": "Вход",
                    "Выход": "Выход",
                    "Регистрация": "Регистрация",
                    "Привет": "Привет",

                    // Home Page
                    "Быстродействие": "Быстродействие",
                    "Безопасность": "Безопасность",
                    "Будущее": "Будущее",
                    "Нейроинтерфейс мозг-машина уже доступен": "Нейроинтерфейс мозг-машина уже доступен",
                    "Разработанный специально для повседневного использования и комфорта НЕЙРОЛИНК Н1 оснащен сухими электродами, которые обеспечивают точную и надежную регистрацию электрической активности головного мозга.": "Разработанный специально для повседневного использования и комфорта НЕЙРОЛИНК Н1 оснащен сухими электродами, которые обеспечивают точную и надежную регистрацию электрической активности головного мозга.",
                    "Купить": "Купить",
                    "Узнать больше": "Узнать больше",

                    //Dashboard
                    "Здоровье": "Здоровье",
                    "Использование": "Использование",
                    "Уведомления": "Уведомления",
                    "Настройки": "Настройки",
                    "Справка": "Справка",
                    "Текущая неделя": "Текущая неделя",
                    "Вчера": "Вчера",
                    "24 часа": "24 часа",
                    "Последний час": "Последний час",
                    "Пульс": "Пульс",
                    "Кровяное давление": "Кровяное давление",
                    "Нет данных за выбранный период": "Нет данных за выбранный период",
                    "Усталость": "Усталость",
                    "Жажда": "Жажда",
                    "Трезвость": "Трезвость",
                    "Таким ваше здоровье было": "Таким ваше здоровье было",

                    // Sign In & Sign Up
                    "Революционно новый нейроинтерфейс": "Революционно новый нейроинтерфейс",
                    "Наш многолетний опыт (более 25 лет) и профессионализм дают возможность создавать технологии нового уровня и расширяют границы для разработчиков и исследователей в самых разных областях человеческих знаний.": "Наш многолетний опыт (более 25 лет) и профессионализм дают возможность создавать технологии нового уровня и расширяют границы для разработчиков и исследователей в самых разных областях человеческих знаний.",
                    "Поле не может быть пустым": "Поле не может быть пустым",
                    "Введите свои данные ниже": "Введите свои данные ниже",
                    "Введите ваш пароль": "Введите ваш пароль",
                    "Пароль": "Пароль",
                    "Пароль еще раз": "Пароль еще раз",
                    "Пароли не совпадают": "Пароли не совпадают",
                    "Подтвердите ваш пароль": "Подтвердите ваш пароль",
                    "Еще нет аккаунта?": "Еще нет аккаунта?",
                    "Уже есть аккаунт?": "Уже есть аккаунт?",
                    "ID устройства содержит 10 символов": "ID устройства содержит 10 символов",
                    "10 символов на обратной стороне устройства": "10 символов на обратной стороне устройства",
                    "Зарегистрироваться": "Зарегистрироваться",
                    "Введенные данные некорректны": "Введенные данные некорректны",
                    "Ошибка входа. Проверьте имя email и пароль": "Ошибка входа. Проверьте имя email и пароль",
                    "Добро пожаловать на НЕЙРОЛИНК": "Добро пожаловать на НЕЙРОЛИНК",
                    "Перед началом работы заполните форму ниже": "Перед началом работы заполните форму ниже",
                    "Имя": "Имя",
                    "Фамилия": "Фамилия",
                    "ID устройства": "ID устройства",
                    "Уже есть аккаунт?": "Уже есть аккаунт?",
                    "Войти": "Войти",

                    // Footer
                    "Вы хотите получать индивидуальные предложения?": "Вы хотите получать индивидуальные предложения?",
                    "Оставьте свой email, чтобы оставаться на связи!": "Оставьте свой email, чтобы оставаться на связи!",
                    "Ваш Email": "Ваш Email",
                    "Отправить": "Отправить",
                    "О технологии": "О технологии",
                    "Как это работает": "Как это работает",
                    "Патенты": "Патенты",
                    "Презентации": "Презентации",
                    "О компании": "О компании",
                    "О нас": "О нас",
                    "Сотрудничество": "Сотрудничество",
                    "Вакансии": "Вакансии",
                    "Магазин": "Магазин",
                    "Варианты оплаты": "Варианты оплаты",
                    "Состояние заказа": "Состояние заказа",
                    "Помощь при покупке": "Помощь при покупке",
                    "Связь с нами": "Связь с нами",
                    "Все права защищены": "Все права защищены",

                    // Emulator
                    "Добавить случайные данные": "Добавить случайные данные",
                    "Обновить": "Обновить",
                    "Добавить значения": "Добавить значение",
                    "мм.рт.ст": "мм.рт.ст",
                    "уд./мин": "уд./мин",

                    // Titles
                    "Панель управления - Нейролинк": "Панель управления - Нейролинк",
                    "Здоровье - Нейролинк": "Здоровье - Нейролинк",
                    "Эмулятор - Нейролинк": "Эмулятор - Нейролинк",
                    "Нейролинк": "Нейролинк",
                    "Вход - Нейролинк": "Вход - Нейролинк",
                    "Регистрация - Нейролинк": "Регистрация - Нейролинк",

                    "currentLang": "РУС",
                    "404 Страница не найдена": "404 Страница не найдена"
                }
            },
        },
        fallbackLng: "en",
        debug: true,

        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false,

        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },

        react: {
            wait: true
        }
    });

export default i18n;