{{ .Scratch.Set "output-format" "php" }}
{{ htmlUnescape (partial "header.html" .) }}
{{ htmlUnescape (partial "php-pets-single.html" .) }}
{{ partial "footer.html" . }}
