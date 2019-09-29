export const routes = [
    {
        to: '/',
        label: 'Главная',
        isAuthNeeded: false
    },
    {
        to: '/dashboard',
        label: 'Панель управления',
        isAuthNeeded: true
    },
    {
        to: '/emulator',
        label: 'Эмулятор',
        isAuthNeeded: true
    }
];