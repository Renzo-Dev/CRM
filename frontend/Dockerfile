# Используем официальный Node.js образ
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Указываем порт, который слушает Vite (по умолчанию 5173)
EXPOSE 5173

# Запуск Vite сервера
CMD ["npm", "run", "dev", "--", "--host"]
