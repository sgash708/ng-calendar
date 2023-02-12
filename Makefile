.PHONY: up
up:
	@docker-compose up

.PHONY: down
down:
	@docker-compose down

.PHONY: exec
exec:
	@docker-compose exec node bash

.PHONY: start
start:
	@docker-compose exec node npm start

# angular-cmd
.PHONY: c-module
c-module:
	@docker-compose exec node npx ng g module --routing --name=${name}

.PHONY: c-routing
c-routing:
	@docker-compose exec node npx ng g m

.PHONY: c-action
c-action:
	@docker-compose exec node npx ng g action --name=${name}

.PHONY: c-reducer
c-reducer:
	@docker-compose exec node npx ng g reducer --name=${name}

.PHONY: c-component
c-component:
	@docker-compose exec node npx ng g component --name=${name}

.PHONY: c-effect
c-effect:
	@docker-compose exec node npx ng g effect --name=${name} --flat -s

.PHONY: c-container
c-container:
	@docker-compose exec node npx ng g c ${name} -t -s

