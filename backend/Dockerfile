
FROM python:3.7

ARG DJANGO_ALLOWED_HOSTS
ARG DJANGO_SECRET_KEY
ARG DJANGO_CORS_ORIGIN_WHITELIST

ENV DJANGO_ALLOWED_HOSTS ['*']
ENV DJANGO_SECRET_KEY 'django-insecure-+y_5+=*y_ih!!8l6$67$x_4n_kg&r*g-6^9aa6prra@fx9**_n'
ENV DJANGO_CORS_ORIGIN_WHITELIST ["MYIP","127.0.0.1"]

RUN mkdir /backend
WORKDIR /backend
COPY requirements.txt /backend/
EXPOSE 8000
RUN pip install -r requirements.txt
COPY . /backend/
CMD ["python3", "manage.py","runserver","8000"]
