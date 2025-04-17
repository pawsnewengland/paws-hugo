---
title: "Adoption Application"
date: 2018-01-11T16:03:33-05:00
url: "/adopt/application/"
draft: false
noTitle: false
subnav: "adopt"
wide: false
---

We hate paperwork, too. But to help us keep track of all the people who want to give our dogs wonderful homes, we need you to fill out an adoption form.

An application does not mean you are required to adopt---it just lets us know you are seriously considering a dog for adoption. Please complete all applicable fields.

<form class="adoption-form" id="adoption-form" action="https://service.sheltermanager.com/asmservice" method="post" accept-charset="utf-8"><input type="hidden" name="method" id="method" value="online_form_post"><input type="hidden" name="account" id="account"
	 value="zh0572"><input type="hidden" name="redirect" id="redirect" value="https://pawsnewengland.com/adopt/application-success/"><input
	 type="hidden" name="flags" id="flags" value="Applicant - Adopter"><input type="hidden" name="formname" value="Adoption Application Form">
		<legend>The Basics</legend>
		<p class="text-small text-muted">Some basic information and how we can get in touch with you.</p>

		<div class="row">
			<div class="grid-half">
				<div>
					<div>
						<label for="firstname_360">First Name</label>
					</div>
					<div>
						<input type="text" name="firstname_360" id="firstname_360" autocomplete="given-name" required>
					</div>
				</div>
			</div>
			<div class="grid-half">
				<div>
					<div>
						<label for="lastname_361">Last Name</label>
					</div>
					<div>
						<input type="text" name="lastname_361" id="lastname_361" autocomplete="family-name" required>
					</div>
				</div>
			</div>
		</div>

		<div class="row screen-reader">
			<div class="grid-third">
				<label for="a_emailaddress">If you're human, leave this field blank</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="a_emailaddress" id="a_emailaddress" autocomplete="off">
			</div>
		</div>

		<div class="row">
			<div class="grid-half">
				<div>
					<div>
						<label for="address_366">Your Street (Number and Name)</label>
					</div>
					<div>
						<input type="text" name="address_366" id="address_366" autocomplete="street-address" required>
					</div>
				</div>

				<div>
					<div>
						<label for="city_367">Your City</label>
					</div>
					<div>
						<input type="text" name="city_367" id="city_367" autocomplete="address-level2" required>
					</div>
				</div>

				<div>
					<div>
						<label for="state_368">Your State</label>
					</div>
					<div>
						<select class="asm-onlineform-lookup" name="state_368" id="state_368" autocomplete="address-level1" required>
						<option value=""></option>
						<option>AL</option>
						<option>AK</option>
						<option>AZ</option>
						<option>AR</option>
						<option>CA</option>
						<option>CO</option>
						<option>CT</option>
						<option>DE</option>
						<option>FL</option>
						<option>GA</option>
						<option>HI</option>
						<option>ID</option>
						<option>IL</option>
						<option>IN</option>
						<option>IA</option>
						<option>KS</option>
						<option>KY</option>
						<option>LA</option>
						<option>ME</option>
						<option>MD</option>
						<option>MA</option>
						<option>MI</option>
						<option>MN</option>
						<option>MS</option>
						<option>MO</option>
						<option>MT</option>
						<option>NE</option>
						<option>NV</option>
						<option>NH</option>
						<option>NJ</option>
						<option>NM</option>
						<option>NY</option>
						<option>NC</option>
						<option>ND</option>
						<option>OH</option>
						<option>OK</option>
						<option>OR</option>
						<option>PA</option>
						<option>RI</option>
						<option>SC</option>
						<option>SD</option>
						<option>TN</option>
						<option>TX</option>
						<option>UT</option>
						<option>VT</option>
						<option>VA</option>
						<option>WA</option>
						<option>WV</option>
						<option>WI</option>
						<option>WY</option>
					</select>
					</div>
				</div>

				<div>
					<div>
						<label for="zipcode_369">Your Zip</label>
					</div>
					<div>
						<input type="text" name="zipcode_369" id="zipcode_369" pattern="\d*" autocomplete="postal-code" required>
					</div>
				</div>
			</div>
			<div class="grid-half">
				<div>
					<div>
						<label for="hometelephone_370">Home Phone #</label>
					</div>
					<div>
						<input type="tel" name="hometelephone_370" id="hometelephone_370">
					</div>
				</div>

				<div>
					<div>
						<label for="mobiletelephone_371">Mobile Phone #</label>
					</div>
					<div>
						<input type="tel" name="mobiletelephone_371" id="mobiletelephone_371" autocomplete="tel">
					</div>
				</div>

				<div>
					<div>
						<label for="emailaddress_372">Email</label>
					</div>
					<div>
						<input type="email" name="emailaddress_372" id="emailaddress_372" autocomplete="email" required>
					</div>
				</div>

				<div>
					<div>
						<label for="f458">Your Age</label>
					</div>
					<div>
						<input type="number" min="18" max="125" maxlength="3" id="f458" name="age_458" required>
					</div>
				</div>
			</div>
		</div>

		<legend class="padding-top">The Dog</legend>
		<p class="text-small text-muted">Details about the dog(s) you're interested in.</p>

		<div>
			<div>
				<label for="reserveanimalname_362">Primary Dog You're Interested In</label>
			</div>
			<div>
				{{<asm-pet-select class="no-margin-bottom" type="text" name="reserveanimalname_362" required="true">}}
				<p class="text-small text-muted margin-bottom-small"><strong>Note:</strong> If your desired dog's name does not appear in this list, they're no longer available for adoption.
					Sorry!</p>
			</div>
		</div>

		<div>
			<div>
				<label for="interestReason_363">Why are you interested in this dog?</label>
			</div>
			<div>
				<input type="text" name="interestReason_363" id="interestReason_363">
			</div>
		</div>

		<div>
			<div>
				<label for="alternatedog_364">
					Other Dogs You're Interested In<br>
					<span class="text-small text-muted">Interested in more than one dog? No need to send in multiple applications.</span>
				</label>
			</div>
			<div>
				{{<asm-pet-select type="text" name="alternatedog_364" multiple="true">}}
			</div>
		</div>

		<div class="bg-muted border padding margin-bottom">
			<p>Unsure which of our wonderful dogs is the right match for you? Need guidance? <a href="/adopt/matchmaker/">Our Doggie Matchmaker</a> will work with you to narrow down your search and find a forever friend that is the best match for you.</p>
			<p class="text-center no-margin-bottom"><a class="btn" href="/adopt/matchmaker/">Matchmaker Questionnaire</a></p>
		</div>

		<div class="margin-bottom-small">
			<div>
				<label id="appliedPreviously_375_label">Have you ever applied for a dog from PAWS before?</label>
			</div>
			<div>
				<label class="input-inline"><input aria-labelledby="appliedPreviously_375_label" type="radio" name="appliedPreviously_375" id="appliedPreviously_375_yes" value="Yes" required> Yes</label>
				<label
				 class="input-inline"><input aria-labelledby="appliedPreviously_375_label" type="radio" name="appliedPreviously_375" id="appliedPreviously_375_no" value="No" required> No</label>
			</div>
		</div>

		<div>
			<div>
				<label for="appliedDate_402">If yes, what was the approximate date?</label>
			</div>
			<div>
				<input type="date" name="appliedDate_402" id="appliedDate_402">
			</div>
		</div>

		<div>
			<div>
				<label for="adoptedPreviously_403">Did you adopt a dog from us? If so, what was the dog's name at time of adoption?</label>
			</div>
			<div>
				<input type="text" name="adoptedPreviously_403" id="adoptedPreviously_403">
			</div>
		</div>

		<legend class="padding-top">Employment Info</legend>
		<p class="text-small text-muted">Many of our dogs are surrendered because owners are no longer able to care for them. We want to ensure that we place dogs in financially stable homes.</p>

		<div>
			<div>
				<label for="occupation_376">What is your occupation?</label>
			</div>
			<div>
				<input type="text" name="occupation_376" id="occupation_376" required>
			</div>
		</div>

		<div>
			<div>
				<label for="employer_377">Who is your employer?</label>
			</div>
			<div>
				<input type="text" name="employer_377" id="employer_377" required>
			</div>
		</div>

		<div>
			<div>
				<label for="employerLocation_404">Where is your employer located (City/State)?</label>
			</div>
			<div>
				<input type="text" name="employerLocation_404" id="employerLocation_404" required>
			</div>
		</div>

		<div>
			<div>
				<label for="yearsEmployed_378">How many years have you been with them?</label>
			</div>
			<div>
				<input type="number" name="yearsEmployed_378" id="yearsEmployed_378" required>
			</div>
		</div>

		<div>
			<div>
				<label for="workHours_379">What are your current work hours?</label>
			</div>
			<div>
				<input type="text" name="workHours_379" id="workHours_379" required>
			</div>
		</div>

		<legend class="padding-top">Home Environment</legend>
		<p class="text-small text-muted">We want to make sure that the dog you're interested in is a good fit for your home environment. Some dogs thrive in a high-energy home, while others need something a bit more quiet. Some dogs need a large, fenced yard, while others would do great with just a few short walks.</p>

		<div class="margin-bottom-small">
			<div>
				<label id="homeCountAdults_381_label">How many adults are in the home?</label>
			</div>
			<div>
				<label class="input-inline"><input  aria-labelledby="homeCountAdults_381_label"type="radio" name="homeCountAdults_381" value="1" required> 1</label>
				<label class="input-inline"><input aria-labelledby="homeCountAdults_381_label" type="radio" name="homeCountAdults_381" value="2" required> 2</label>
				 <label class="input-inline"><input aria-labelledby="homeCountAdults_381_label" type="radio" name="homeCountAdults_381" value="3" required> 3</label>
				<label class="input-inline"><input aria-labelledby="homeCountAdults_381_label" type="radio" name="homeCountAdults_381" value="4" required> 4</label>
				<label class="input-inline"><input aria-labelledby="homeCountAdults_381_label" type="radio" name="homeCountAdults_381" value="5+" required> 5+</label>
			</div>
		</div>

		<div>
			<div>
				<label for="otherMembersOfHousehold_380">First Name, Last Name &amp; Age of ALL adults living in the home</label>
			</div>
			<div>
				<input type="text" name="otherMembersOfHousehold_380" id="otherMembersOfHousehold_380">
			</div>
		</div>

		<div class="margin-bottom-small">
			<div>
				<label id="homeCountChildren_383_label">How many children are in the home?</label>
			</div>
			<div>
				<label class="input-inline"><input aria-labelledby="homeCountChildren_383_label" type="radio" name="homeCountChildren_383" value="0" required> 0</label>
				<label class="input-inline"><input aria-labelledby="homeCountChildren_383_label" type="radio" name="homeCountChildren_383" value="1" required> 1</label>
				<label class="input-inline"><input aria-labelledby="homeCountChildren_383_label" type="radio" name="homeCountChildren_383" value="2" required> 2</label>
				<label class="input-inline"><input aria-labelledby="homeCountChildren_383_label" type="radio" name="homeCountChildren_383" value="3" required> 3</label>
				<label class="input-inline"><input aria-labelledby="homeCountChildren_383_label" type="radio" name="homeCountChildren_383" value="4+" required> 4+</label>
			</div>
		</div>

		<div>
			<div>
				<label for="homeAgesChildren_384">What are their ages?</label>
			</div>
			<div>
				<input type="text" name="homeAgesChildren_384" id="homeAgesChildren_384">
			</div>
		</div>

		<div class="margin-bottom-small">
			<div>
				<label id="discussed_385_label">Has this been discussed with all members of the home?</label>
			</div>
			<div>
				<label class="input-inline"><input aria-labelledby="discussed_385_label" type="radio" name="discussed_385" value="Yes" required> Yes</label>
				<label
				 class="input-inline"><input aria-labelledby="discussed_385_label" type="radio" name="discussed_385" value="No" required> No</label>
			</div>
		</div>

		<div class="margin-bottom-small">
			<div>
				<label id="ownRent_386_label">Do you own or rent?</label>
			</div>
			<div>
				<label class="input-inline"><input aria-labelledby="ownRent_386_label" type="radio" name="ownRent_386" value="Own" required> Own</label>
				<label
				 class="input-inline"><input aria-labelledby="ownRent_386_label" type="radio" name="ownRent_386" value="Rent" required> Rent</label>
			</div>
		</div>

		<div>
			<div>
				<label for="homeLandlord_387">If you rent, what's your landlord's contact information (First &amp; Last Name, Phone &amp; Email)?</label>
			</div>
			<div>
				<input type="text" name="homeLandlord_387" id="homeLandlord_387">
			</div>
		</div>

		<div class="margin-bottom-small">
			<div>
				<label id="landloardApproval_405_label">If you rent, have you discussed your plans to adopt with your landlord?</label>
			</div>
			<div>
				<label class="input-inline"><input aria-labelledby="landloardApproval_405_label" type="radio" name="landloardApproval_405" value="Yes"> Yes</label>
				<label
				 class="input-inline"><input aria-labelledby="landloardApproval_405_label" type="radio" name="landloardApproval_405" value="No"> No</label>
			</div>
		</div>

		<div class="margin-bottom-small">
			<div>
				<label id="landloardBreedRestriction_406_label">If you rent, have they stated that there are breed restrictions??</label>
			</div>
			<div>
				<label class="input-inline"><input aria-labelledby="landloardBreedRestriction_406_label" type="radio" name="landloardBreedRestriction_406" value="Yes"> Yes</label>
				<label
				 class="input-inline"><input aria-labelledby="landloardBreedRestriction_406_label" type="radio" name="landloardBreedRestriction_406" value="No"> No</label>
			</div>
		</div>

		<div>
			<div>
				<label for="homeownerContact_407">
					If you own your home, please provide the First and Last Name of the person the home ownership is registered with the city/town<br>
					<span class="text-small text-muted margin-bottom-small">We will be confirming this information</span>
				</label>
			</div>
			<div>
				<input type="text" name="homeownerContact_407" id="homeownerContact_407">
			</div>
		</div>

		<div>
			<div>
				<label for="homeTenure_388">How long have you lived there?</label>
			</div>
			<div>
				<select class="asm-onlineform-lookup" name="homeTenure_388" id="homeTenure_388" required>
					<option value=""></option>
					<option>Under 6 months</option>
					<option>Under 1 year</option>
					<option>1-2 years</option>
					<option>3-5 years</option>
					<option>6-10 years</option>
					<option>11-20 years</option>
					<option>21+ years</option>
				</select>
			</div>
		</div>

		<div>
			<div>
				<label for="homeType_389">Type of Home</label>
			</div>
			<div>
				<select class="asm-onlineform-lookup" name="homeType_389" id="homeType_389" required>
					<option value=""></option>
					<option>Apartment</option>
					<option>Condo</option>
					<option>Duplex</option>
					<option>Single Family</option>
				</select>
			</div>
		</div>

		<div class="margin-bottom-small">
			<div>
				<label id="homeFence_390_label">Is the yard fenced?</label>
			</div>
			<div>
				<label class="input-inline"><input aria-labelledby="homeFence_390_label" type="radio" name="homeFence_390" value="Yes" required> Yes</label>
				<label
				 class="input-inline"><input aria-labelledby="homeFence_390_label" type="radio" name="homeFence_390" value="No" required> No</label>
			</div>
		</div>

		<div>
			<div>
				<label for="homeFenceType_391">If yes, what's the height and type of fence?</label>
			</div>
			<div>
				<input type="text" name="homeFenceType_391" id="homeFenceType_391">
			</div>
		</div>

		<div>
			<div>
				<label for="homeStreetType_392">What type of street do you live on?</label>
			</div>
			<div>
				<select name="homeStreetType_392" id="homeStreetType_392" required>
					<option value=""></option>
					<option>Main Road</option>
					<option>Side Street</option>
					<option>Private Road</option>
					<option>Cul de Sac</option>
				</select>
			</div>
		</div>

		<div class="margin-bottom-small">
			<div>
				<label id="homeVisit_393_label">We require a home visit by one our volunteers, either in-person or virtual. Are you OK with this?</label>
			</div>
			<div>
				<label class="input-inline"><input aria-labelledby="homeVisit_393_label" type="radio" name="homeVisit_393" value="Yes" required> Yes</label>
				<label
				 class="input-inline"><input aria-labelledby="homeVisit_393_label" type="radio" name="homeVisit_393" value="No" required> No</label>
			</div>
		</div>

		<div>
			<div>
				<label for="homeAdditionalInfo_394">Any additional information that describes your home environment?</label>
			</div>
			<div>
				<textarea name="homeAdditionalInfo_394" id="homeAdditionalInfo_394"></textarea>
			</div>
		</div>

		<legend class="padding-top">A Few Additional Details</legend>
		<p class="text-small text-muted">Work schedules, other pets, and references.</p>

		<div>
			<div>
				<label for="workSchedule_395">What is the primary caregiver's work schedule?</label>
			</div>
			<div>
				<input type="text" name="workSchedule_395" id="workSchedule_395" required>
			</div>
		</div>

		<div>
			<div>
				<label for="aloneTime_408">How long would a dog be alone during an average day (including travel time)?</label>
			</div>
			<div>
				<input type="text" name="aloneTime_408" id="aloneTime_408" required>
			</div>
		</div>

		<div>
			<div>
				<label for="dogWhileAway_396">How will the dog be maintained while you're away or at work?</label>
			</div>
			<div>
				<textarea name="dogWhileAway_396" id="dogWhileAway_396" required></textarea>
			</div>
		</div>

		<div class="margin-bottom-small">
			<div>
				<label id="surrenderedPets_409_label">
					Have you ever surrendered a pet?<br>
					<span class="text-small text-muted margin-bottom-small">We understand there are circumstances where this is necessary. Answering yes will NOT automatically make you ineligible to adopt from PAWS New England.</span>
				</label>
			</div>
			<div>
				<label class="input-inline"><input aria-labelledby="surrenderedPets_409_label" type="radio" name="surrenderedPets_409" value="Yes" required> Yes</label>
				<label
				 class="input-inline"><input aria-labelledby="surrenderedPets_409_label" type="radio" name="surrenderedPets_409" value="No" required> No</label>
			</div>
		</div>

		<div>
			<div>
				<label for="surrenderedDetails_410">If you have surrendered any pets, please describe the circumstances that led to the surrender.</label>
			</div>
			<div>
				<textarea name="surrenderedDetails_410" id="surrenderedDetails_410"></textarea>
			</div>
		</div>

		<div class="margin-bottom-small">
			<div>
				<label id="otherPets_397_label">Have you had any animals in the last 10 years?</label>
			</div>
			<div>
				<label class="input-inline"><input aria-labelledby="otherPets_397_label" type="radio" name="otherPets_397" value="Yes" required> Yes</label>
				<label
				 class="input-inline"><input aria-labelledby="otherPets_397_label" type="radio" name="otherPets_397" value="No" required> No</label>
			</div>
		</div>

		<div>
			<div>
				<label for="currentPetDetails_398">Current Pets: Name, Breed/Mix, Age, Medical/Behavior Issues</label>
			</div>
			<div>
				<textarea name="currentPetDetails_398" id="currentPetDetails_398"></textarea>
			</div>
		</div>

		<div>
			<div>
				<label for="pastPets_411">Past Pets: Name, Breed/Mix, Age, Medical/Behavior Issues, Alive/Deceased, Reason no longer in the home?</label>
			</div>
			<div>
				<textarea name="pastPets_411" id="pastPets_411"></textarea>
			</div>
		</div>

		<div>
			<div>
				<label for="vetContact_412">Vet Reference: Veterinary Practice Name(s), Phone, City, Town, Name of animals seen at the clinic(s)<br>
				<span class="text-small text-muted"><strong>Note:</strong> Please contact your vet directly and advise you authorize release of information to a PAWS New England volunteer.</em></span>
			</label>
			</div>
			<div>
				<textarea name="vetContact_412" id="vetContact_412"></textarea>
			</div>
		</div>

		<div>
			<div>
				<label for="vetCareOf_413">If vet records are under a different name than yours, please provide the First &amp; Last Name the records are listed under</label>
			</div>
			<div>
				<input type="text" name="vetCareOf_413" id="vetCareOf_413">
			</div>
		</div>

		<div>
			<div>
				<label for="personalReferences_400">Personal Reference: First and Last Name, Phone, Email<br>
				<span class="text-small text-muted">Family members do not qualify as personal references. Please advise this person we will be potentially contacting them.</span>
			</label>
			</div>
			<div>
				<textarea name="personalReferences_400" id="personalReferences_400"></textarea>
			</div>
		</div>

		<div>
			<div>
				<label for="pawsReference_414">PAWS New England Reference: If you are acquainted with any Paws New England Volunteers please provide their First and Last Name(s)</label>
			</div>
			<div>
				<input type="text" name="pawsReference_414" id="pawsReference_414">
			</div>
		</div>

		<div class="padding-top margin-bottom">
			<p id="terms_401_label"><strong>I agree to the following:</strong> All statements made on this application are truthful; I have made no false statement with regard to family members in household, references provided not being family members, status of my home ownership and any other statements made on this application.</p>
			<label class="input-inline"><input aria-labelledby="terms_401_label" type="radio" name="terms_401" value="I agree" required> I agree</label>
			<label class="input-inline"><input aria-labelledby="terms_401_label" type="radio" name="terms_401" value="I disagree" required> I disagree</label>
		</div>

		<div class="bg-muted border padding form-saver margin-bottom">
			<p class="margin-bottom-small">Think you might complete other applications in the future? Save your information to make filling out the form faster.</p>
			<div data-form-status></div>
			<p class="no-margin-bottom"><button type="button" class="btn" data-form-save="#adoption-form" data-options='{ "saveMessage": "Your info was saved!","saveClass": "alert alert-success"}'>Save Your Info</button> <button type="button" class="btn btn-tertiary" data-form-delete="#adoption-form" data-options='{"deleteMessage": "Your info was deleted.","deleteClass": "alert alert-success"}'>Delete Your Info</button></p>
		</div>

		<div class="clearfix text-right">
			<input type="hidden" name="magicASJSkey" id="magicASJSkey" value="918273645">
			<input class="input-inline btn btn-large" type="submit" value="Submit">
		</div>
</form>