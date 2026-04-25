{{ partial "header.html" . }}

	{{ partial "content-page.html" . }}

	<div class="row">
		<div class="grid-fourth" data-pet-listing-filters>
			<p><em>Loading filters...</em></p>
		</div>
		<div class="margin-bottom grid-three-fourths" data-pet-listings>
			<div class="row row-start-xsmall row-wrap">
				{{ htmlUnescape (partial "php-pets-all.html" .) }}
			</div>
		</div>
	</div>

	<script>
		{{ with try (resources.GetRemote $.Site.Params.pets) }}
			{{ with .Value }}
				{{ $pets := . | transform.Unmarshal }}
				var petListingData = {{ $pets | jsonify }};
			{{ else }}
				var petListingData = [];
			{{ end }}
		{{ end }}
	</script>

{{ partial "footer.html" . }}