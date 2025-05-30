FROM php:8.2-fpm

# Установка зависимостей
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    curl \
    git \
    libzip-dev \
    libmcrypt-dev \
    && docker-php-ext-configure zip \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl bcmath gd

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Установка рабочего каталога
WORKDIR /var/www

# Копирование файлов Laravel (опционально, если без volume)
# COPY . .

# Установка прав
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www

CMD ["php-fpm"]
