---
title: "Adoption Application"
date: 2018-01-11T16:03:33-05:00
url: "/adopt/application/"
draft: false
noTitle: false
subnav: "adopt"
wide: false
redirect: https://service.sheltermanager.com/asmservice?account=zh0572&method=online_form_html&formid=1
---

We hate paperwork, too. But to help us keep track of all the people who want to give our dogs wonderful homes, we need you to fill out an adoption form.

An application does not mean you are required to adopt---it just lets us know you are seriously considering a dog for adoption. Please complete all applicable fields.

<form class="adoption-form" id="adoption-form" action="https://service.sheltermanager.com/asmservice" method="post" accept-charset="utf-8"><input type="hidden" name="method" id="method" value="online_form_post"><input type="hidden" name="account" id="account"
	 value="zh0572"><input type="hidden" name="redirect" id="redirect" value="https://pawsnewengland.com/adopt/application-success/">
	<input
	 type="hidden" name="flags" id="flags" value="Applicant - Adopter"><input type="hidden" name="formname" id="formname" value="Adoption Application Form">
		<legend>The Basics</legend>
		<p class="text-small text-muted">Some basic information and how we can get in touch with you.</p>
		<div class="row">
			<div class="grid-third">
				<label for="firstname_1">First Name</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="firstname_1" id="firstname_1" title="Enter your first name" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="lastname_2">Last Name</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="lastname_2" id="lastname_2" title="Enter your last name" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="reserveanimalname_3">Primary Dog You're Interested In</label>
			</div>
			<div class="grid-two-thirds">
				{{<asm-pet-select class="no-margin-bottom" type="text" name="reserveanimalname_3" required="true">}}
				<p class="text-small text-muted margin-bottom-small"><strong>Note:</strong> If your desired dog's name does not appear in this list, they're no longer available for adoption.
					Sorry!</p>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="interestReason_6">Why are you interested in this dog?</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="interestReason_6" title="Share why you're interested in this dog" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="alternatedog_143">
					Other Dogs You're Interested In<br>
					<span class="text-small text-muted">Interested in more than one dog? No need to send in multiple applications.</span>
				</label>
			</div>
			<div class="grid-two-thirds">
				{{<asm-pet-select type="text" name="alternatedog_143" multiple="true">}}
			</div>
		</div>

		<div class="bg-muted border padding margin-bottom">
			<p>Unsure which of our wonderful dogs is the right match for you? Need guidance? <a href="/adopt/matchmaker/">Our Doggie Matchmaker</a>						will work with you to narrow down your search and find a forever friend that is the best match for you.</p>
			<p class="text-center no-margin-bottom"><a class="btn" href="/adopt/matchmaker/">Matchmaker Questionnaire</a></p>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="address_7">Your Street</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="address_7" id="address_7" title="Enter your street number and name" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="city_8">Your City</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="city_8" id="city_8" title="Enter your city" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="state_9">Your State</label>
			</div>
			<div class="grid-two-thirds">
				<select class="asm-onlineform-lookup" name="state_9" id="state_9" title="Select your state" required>
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

		<div class="row">
			<div class="grid-third">
				<label for="zipcode_10">Your Zip</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="zipcode_10" id="zipcode_10" pattern="\d*" title="Enter your zip code" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="hometelephone_11">Home Phone #</label>
			</div>
			<div class="grid-two-thirds">
				<input type="tel" name="hometelephone_11" id="hometelephone_11" r title="Enter your home phone number">
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="mobiletelephone_12">Mobile Phone #</label>
			</div>
			<div class="grid-two-thirds">
				<input type="tel" name="mobiletelephone_12" id="mobiletelephone_12" title="Enter your mobile telephone number">
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="emailaddress_13">Email</label>
			</div>
			<div class="grid-two-thirds">
				<input type="email" name="emailaddress_13" id="emailaddress_13" title="Enter your email address" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="dateOfBirth_14">Date of Birth</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="dateOfBirth_14" id="dateOfBirth_14" title="Enter your date of birth" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="pneReference_15">How did you hear about PAWS New England?</label>
			</div>
			<div class="grid-two-thirds">
				<select class="asm-onlineform-lookup" name="pneReference_15" id="pneReference_15" title="Select how you heard about PAWS New England">
				<option value=""></option>
				<option>Adopt-a-Pet</option>
				<option>Adoption Event</option>
				<option>Coworker</option>
				<option>Facebook</option>
				<option>Family</option>
				<option>Friend</option>
				<option>Fundraiser</option>
				<option>Internet</option>
				<option>Instagram</option>
				<option>John Gagnon Pet Resourt</option>
				<option>Other</option>
				<option>Overstock</option>
				<option>PAWS Volunteer</option>
				<option>PAWS Website</option>
				<option>Petfinder</option>
				<option>TV</option>
			</select>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="appliedPreviously_16">Have you ever applied for a dog from PAWS before?</label>
			</div>
			<div class="grid-two-thirds">
				<label class="input-inline"><input type="radio" name="appliedPreviously_16" id="appliedPreviously_16" title="Share whether or not you've applied for a dog form PAWS before" value="Yes" required> Yes</label>
				<label
				 class="input-inline"><input type="radio" name="appliedPreviously_16" id="appliedPreviously_16" value="No" required> No</label>
			</div>
		</div>

		<legend class="space-top">Employment Info</legend>
		<p class="text-small text-muted">Many of our dogs are surrendered because owners are no longer able to care for them. We want to ensure that we place
			dogs in financially stable homes.</p>

		<div class="row">
			<div class="grid-third">
				<label for="occupation_17">What is your occupation?</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="occupation_17" id="occupation_17" title="Enter your occupation" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="employer_18">Who is your employer?</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="employer_18" id="employer_18" title="Enter your employer" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="yearsEmployed_19">How many years have you been with them?</label>
			</div>
			<div class="grid-two-thirds">
				<input type="number" name="yearsEmployed_19" id="yearsEmployed_19" title="Select the number of years you've been employed with your current employer"
				 required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="employerPhone_20">Employer phone #</label>
			</div>
			<div class="grid-two-thirds">
				<input type="tel" name="employerPhone_20" id="employerPhone_20" title="Enter your employer's phone number" required>
			</div>
		</div>

		<legend class="space-top">Home Environment</legend>
		<p class="text-small text-muted">We want to make sure that the dog you're interested in is a good fit for your home environment. Some dogs thrive in a
			high-energy home, while others need something a bit more quiet. Some dogs need a large, fenced yard, while others would
			do great with just a few short walks.</p>

		<div class="row">
			<div class="grid-third">
				<label for="otherMembersOfHousehold_21">Who do you live with?</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="otherMembersOfHousehold_21" id="otherMembersOfHousehold_21" title="Enter who you live with" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="homeCountAdults_22">How many adults are in the home?</label>
			</div>
			<div class="grid-two-thirds"><label class="input-inline"><input type="radio" name="homeCountAdults_22" id="homeCountAdults_22" title="Select the number of adults in your home" value="1" required> 1</label>
				<label
				 class="input-inline"><input type="radio" name="homeCountAdults_22" id="homeCountAdults_22" value="2" required> 2</label><label class="input-inline"><input type="radio" name="homeCountAdults_22" id="homeCountAdults_22" value="3" required> 3</label>
					<label
					 class="input-inline"><input type="radio" name="homeCountAdults_22" id="homeCountAdults_22" value="4" required> 4</label><label class="input-inline"><input type="radio" name="homeCountAdults_22" id="homeCountAdults_22" value="5+" required> 5+</label>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="homeAgesAdult_23">What are their ages?</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="homeAgesAdult_23" id="homeAgesAdult_23" title="Enter the ages of the adults in your home" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="homeCountChildren_24">How many children are in the home?</label>
			</div>
			<div class="grid-two-thirds">
				<label class="input-inline"><input type="radio" name="homeCountChildren_24" id="homeCountChildren_24" title="Select the number of children in your home" value="0" required> 0</label>
				<label
				 class="input-inline"><input type="radio" name="homeCountChildren_24" id="homeCountChildren_24" value="1" required> 1</label><label class="input-inline"><input type="radio" name="homeCountChildren_24" id="homeCountChildren_24" value="2" required> 2</label>
					<label
					 class="input-inline"><input type="radio" name="homeCountChildren_24" id="homeCountChildren_24" value="3" required> 3</label><label class="input-inline"><input type="radio" name="homeCountChildren_24" id="homeCountChildren_24" value="4+" required> 4+</label>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="homeAgesChildren_25">What are their ages?</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="homeAgesChildren_25" id="homeAgesChildren_25" title="Enter the ages of the children in your home">
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="discussed_26">Has this been discussed with all members of the home?</label>
			</div>
			<div class="grid-two-thirds">
				<label class="input-inline"><input type="radio" name="discussed_26" id="discussed_26" title="Select whether or not this has been discussed with all members of your home" value="Yes" required> Yes</label>
				<label
				 class="input-inline"><input type="radio" name="discussed_26" id="discussed_26" value="No" required> No</label>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="ownRent_27">Do you own or rent?</label>
			</div>
			<div class="grid-two-thirds">
				<label class="input-inline"><input type="radio" name="ownRent_27" id="ownRent_27" title="Select whether you own or rent your home" value="Own" required> Own</label>
				<label
				 class="input-inline"><input type="radio" name="ownRent_27" id="ownRent_27" value="Rent" required> Rent</label>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="homeLandlord_28">If you rent, what's your landlords name and phone #?</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="homeLandlord_28" id="homeLandlord_28" title="">
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="homeTenure_29">How long have you lived there?</label>
			</div>
			<div class="grid-two-thirds">
				<select class="asm-onlineform-lookup" name="homeTenure_29" id="homeTenure_29" title="Select how long you have lived in your home"
				 required>
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

		<div class="row">
			<div class="grid-third">
				<label for="homeType_30">Type of Home</label>
			</div>
			<div class="grid-two-thirds">
				<select class="asm-onlineform-lookup" name="homeType_30" id="homeType_30" title="Select the type of home you live in" required>
				<option value=""></option>
				<option>Apartment</option>
				<option>Condo</option>
				<option>Duplex</option>
				<option>Single Family</option>
			</select>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="homeFence_31">Is the yard fenced?</label>
			</div>
			<div class="grid-two-thirds">
				<label class="input-inline"><input type="radio" name="homeFence_31" id="homeFence_31" title="Select whether or not your yard is fenced in" value="Yes" required> Yes</label>
				<label
				 class="input-inline"><input type="radio" name="homeFence_31" id="homeFence_31" value="No" required> No</label>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="homeFenceType_32">If yes, what's the height and type of fence?</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="homeFenceType_32" id="homeFenceType_32" title="">
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="homeStreetType_33">What type of street do you live on?</label>
			</div>
			<div class="grid-two-thirds">
				<select class="asm-onlineform-lookup" name="homeStreetType_33" id="homeStreetType_33" title="Select the type of street you live on"
				 required>
				<option value=""></option>
				<option>Main Road</option>
				<option>Side Street</option>
				<option>Private Road</option>
				<option>Cul de Sac</option>
			</select>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="homeVisit_34">May we visit your home?</label>
			</div>
			<div class="grid-two-thirds">
				<label class="input-inline"><input type="radio" name="homeVisit_34" id="homeVisit_34" title="Select whether or not we may visit your home" value="Yes" required> Yes</label>
				<label
				 class="input-inline"><input type="radio" name="homeVisit_34" id="homeVisit_34" value="No" required> No</label>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="homeAdditionalInfo_35">Any additional information that describes your home environment?</label>
			</div>
			<div class="grid-two-thirds">
				<textarea name="homeAdditionalInfo_35" id="homeAdditionalInfo_35" title="Add any additional information that describes your home"></textarea>
			</div>
		</div>

		<legend class="space-top">A Few Additional Details</legend>
		<p class="text-small text-muted">Work schedules, other pets, and references.</p>

		<div class="row">
			<div class="grid-third">
				<label for="workSchedule_36">What is the primary caregiver's work schedule?</label>
			</div>
			<div class="grid-two-thirds">
				<input type="text" name="workSchedule_36" id="workSchedule_36" title="Describe the primary caregivers schedule" required>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="dogWhileAway_37">How will the dog be maintained while you're away or at work?</label>
			</div>
			<div class="grid-two-thirds">
				<textarea name="dogWhileAway_37" id="dogWhileAway_37" title="Describe how the dog will be maintained while you're away or at work"
				 required></textarea>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="otherPets_38">Have you had any animals in the last 10 years?</label>
			</div>
			<div class="grid-two-thirds">
				<label class="input-inline"><input type="radio" name="otherPets_38" id="otherPets_38" title="Select whether or not you have owned any other animals in the last 10 years" value="Yes" required> Yes</label>
				<label
				 class="input-inline"><input type="radio" name="otherPets_38" id="otherPets_38" value="No" required> No</label>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="otherPetDetails_39">If yes, please share their names, species (dog, cat, etc.), breed (if dog), whether or not they’re still alive, and if deceased, how they died.</label>
			</div>
			<div class="grid-two-thirds">
				<textarea name="otherPetDetails_39" id="otherPetDetails_39" title=""></textarea>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="vetReferences_40">Vet References<br>
				<span class="text-small text-muted">Name, Address, Phone #<br><em><strong>Note:</strong> Please contact your vet directly and advise you authorize release of information to a Paws New England volunteer.</em></span>
			</label>
			</div>
			<div class="grid-two-thirds">
				<textarea name="vetReferences_40" id="vetReferences_40" title="Provide a veterinary reference"></textarea>
			</div>
		</div>

		<div class="row">
			<div class="grid-third">
				<label for="personalReferences_41">Personal References<br>
				<span class="text-small text-muted">If no vet reference is available, please include at least two. Family members cannot be personal references.</span>
			</label>
			</div>
			<div class="grid-two-thirds">
				<textarea name="personalReferences_41" id="personalReferences_41" title="Provide a personal reference"></textarea>
			</div>
		</div>

		<div class="margin-bottom">
			<p>I agree to the following: All statements made on this application are truthful; I have made no false statement with
				regard to family members in household, references provided not being family members, status of my home ownership and
				any other statements made on this application.</p>
			<label class="input-inline"><input type="radio" name="terms_42" id="terms_42" title="Select whether or not you agree" value="I agree" required> I agree</label>
			<label
			 class="input-inline"><input type="radio" name="terms_42" id="terms_42" value="I disagree" required> I disagree</label>
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