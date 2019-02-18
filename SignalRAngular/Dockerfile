FROM node as build
WORKDIR /build
CMD npm install -g typescript @angular/cli
COPY . .
CMD npm install
CMD ng build --prod


FROM nginx:alpine as prod
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist/SignalRAngular .
