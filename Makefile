dev:
	docker exec -it vuuri-client yarn serve
client-ssh:
	docker exec -it vuuri-client /bin/bash
pw-ssh:
	docker exec -it vuuri-playwright /bin/bash
pw-install:
	docker exec -it vuuri-playwright sh -c "yarn pw:install"
pw-test:
	docker exec -it vuuri-playwright sh -c "yarn pw:test"
pw-coverage:
	docker exec -it vuuri-playwright sh -c "yarn pw:test:coverage"
client-dev:
	docker exec -it vuuri-client sh -c "cd dev && yarn dev"
build:
	docker exec -it vuuri-client sh -c "yarn build"
client-test:
	docker exec -it vuuri-client sh -c "yarn test:unit"
client-test-coverage:
	docker exec -it vuuri-client sh -c "yarn ci:test:unit:coverage"
pw-report:
	docker exec -it vuuri-playwright sh -c "yarn pw:report"