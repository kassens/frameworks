JS_FILES := $(wildcard *.js)
HTML_FILES := $(wildcard *.html)
CSS_FILES := $(wildcard *.css)
IMAGES := images/logo16.png images/logo48.png images/logo128.png

all: extension.zip

extension.zip: manifest.json LICENSE ${JS_FILES} ${HTML_FILES} ${CSS_FILES} ${IMAGES}
	rm -f $@
	zip $@ $^
