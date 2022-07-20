FROM node:14.17.3 AS angular
ARG ENVIRONMENT
WORKDIR /app
COPY package.json /app/package.json
COPY . /app
RUN npm install
RUN npm install -g @angular/cli
RUN ng build --configuration=dev --base-href "/fe-onboarding-pyme/" --deploy-url "/fe-onboarding-pyme/"

FROM nginx:alpine
# -- Control
ARG GITCOMMIT
ENV GITCOMMIT ${GITCOMMIT:-abc123}
ARG GITCOMMIT_PREVIOUS
ENV GITCOMMIT_PREVIOUS ${GITCOMMIT_PREVIOUS:-123abc}
ARG GITBRANCH
ENV GITBRANCH ${GITBRANCH:-manual}
ARG GITAUTHOR
ENV GITAUTHOR ${GITAUTHOR:-manual}
# --
COPY --from=angular /app/dist/fe-onboarding-pyme /usr/share/nginx/html
COPY .nginx/nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /etc/nginx/html && touch /etc/nginx/html/index.html
RUN chmod -R +r /usr/share/nginx/html
RUN nginx -t

# FROM nginx:alpine
# COPY ./dist/fe-onboarding-pyme /usr/share/nginx/html

