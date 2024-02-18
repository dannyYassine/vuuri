dev:
	docker exec -it vuuri-client yarn serve
client-ssh:
	docker exec -it vuuri-client /bin/bash
client-dev:
	docker exec -it vuuri-client sh -c "cd dev && yarn dev"
client-test:
	docker exec -it vuuri-client sh -c "yarn test:unit"