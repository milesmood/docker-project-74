setup: install db-migrate

install:
	npm install

db-migrate:
	npm run migrate

build:
	npm run build

start:
	NODE_ENV=production npm run start

dev:
	npx concurrently "make start-frontend" "make start-backend"

start-backend:
	NODE_ENV=test npm start -- --watch --verbose-watch --ignore-watch='node_modules .git .sqlite'

start-frontend:
	npx webpack --watch --progress

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test:
	NODE_ENV=test npm test -s

up:
	docker-compose up

up-flags:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app

ci:
	docker-compose -f dockerfile-compose.yml up 

sleep:
	bash -c 'sleep 3'


