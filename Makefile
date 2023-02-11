.PHONY: up
up:
	@docker-compose up -d

.PHONY: down
down:
	@docker-compose down

.PHONY: exec
exec:
	@docker-compose exec node bash

.PHONY: start
start:
	@docker-compose exec node npm start
