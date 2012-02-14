ICOS := $(wildcard images/*.ico)

JS_FILES := $(wildcard *.js)
HTML_FILES := $(wildcard *.html)
PNG_FILES := $(wildcard images/*.png) $(patsubst %.ico, %.png, $(ICOS))

all: extension.zip

%.png: %.ico
	convert $< $@

extension.zip: manifest.json LICENSE ${JS_FILES} ${HTML_FILES} ${PNG_FILES}
	rm -f $@
	zip $@ $^
