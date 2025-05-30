#!/bin/bash

# Список всех сервисов, где нужно установить Laravel
SERVICES=(
  auth-service
  user-service
  lead-service
  task-service
  file-service
  notification-service
)

LARAVEL_PATH="/var/www"

for SERVICE in "${SERVICES[@]}"; do
  echo -e "\n==============================="
  echo "🚀 Установка Laravel в: $SERVICE"
  echo "==============================="

  docker compose exec "$SERVICE" bash -c "
    cd $LARAVEL_PATH || exit 1

    if [ ! -f artisan ]; then
        echo '📦 Laravel не найден — устанавливаем...'
        composer create-project laravel/laravel . --no-interaction
    else
        echo '✅ Laravel уже установлен.'
    fi

    echo '⚙️ composer install...'
    composer install

    echo '🛠 .env файл...'
    cp -n .env.example .env || echo '.env уже существует'

    echo '🔑 Генерация APP_KEY...'
    php artisan key:generate

    echo '🧼 Права на storage и cache...'
    chown -R www-data:www-data storage bootstrap/cache
    chmod -R 775 storage bootstrap/cache

    echo '✅ Готово для $SERVICE!'
  "
done
