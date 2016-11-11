build:
	rm -rf dist
	npm run build

generate-assets:
	rm -rf bindata
	mkdir -p bindata
	mv dist web-app
	go-bindata -o bindata/bindata.go -pkg assets -ignore=.gitignore -ignore .DS_Store web-app/...
	mv web-app dist

start:
	npm start

install:
	npm install