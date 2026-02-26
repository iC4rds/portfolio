<script>
	let isSubmitting = $state(false);
	let submitMessage = $state('');
	let errorMessage = $state('');
	let formData = $state({ name: '', email: '', subject: '', message: '' });

	/**
	 * @param {Event} event
	 */
	async function handleSubmit(event) {
		event.preventDefault();

		submitMessage = '';
		errorMessage = '';

		if (!validateForm()) {
			return;
		}

		isSubmitting = true;

		try {
			await sendMessage(formData);
		} catch (error) {
			console.error('Submit error:', error);
			errorMessage =
				'An unexpected error occurred. Please try again later.';
			setTimeout(() => {
				errorMessage = '';
			}, 5000);
		} finally {
			isSubmitting = false;
		}
	}

	/**
	 * @returns {boolean}
	 */
	function validateForm() {
		if (!formData.name.trim()) {
			errorMessage = 'Please enter your name.';
			return false;
		}

		if (!formData.email.trim()) {
			errorMessage = 'Please enter your email address.';
			return false;
		}

		if (!formData.subject.trim()) {
			errorMessage = 'Please enter a subject.';
			return false;
		}

		if (!formData.message.trim()) {
			errorMessage = 'Please enter a message.';
			return false;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			errorMessage = 'Please enter a valid email address.';
			return false;
		}

		return true;
	}

	/**
	 * @param {{ name: string; email: string; subject: string; message: string }} data
	 */
	async function sendMessage(data) {
		try {
			const response = await fetch('/api/messages', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: data.name.trim(),
					email: data.email.trim(),
					subject: data.subject?.trim(),
					message: data.message.trim()
				})
			});

			const result = await response.json();

			if (response.ok) {
				submitMessage = 'Thank you for your message! I will get back to you soon.';
				formData = { name: '', email: '', subject: '', message: '' };

				setTimeout(() => {
					submitMessage = '';
				}, 5000);
			} else {
				errorMessage = result.error || 'Error sending the message.';
				setTimeout(() => {
					errorMessage = '';
				}, 5000);
			}
		} catch (error) {
			throw new Error('Network error: ' + error);
		}
	}
</script>

<section id="contact" class="py-20 bg-catbase">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-cattext mb-4">Contact</h2>
			<div class="w-24 h-1 bg-catblue mx-auto mb-6"></div>
		</div>

		<div class="bg-catsurface p-8 rounded-2xl shadow-lg">
			<form 
				id="contactForm" 
				onsubmit={handleSubmit} 
				class="space-y-6"
			>
				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<label for="name" class="block text-sm font-medium text-cattext mb-2">Name</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							required
							class="text-cattext w-full px-4 py-3 border border-cattext rounded-lg focus:ring-2 focus:ring-catblue focus:border-transparent transition-colors"
							placeholder="Your Name"
						/>
					</div>
					<div>
						<label for="email" class="block text-sm font-medium text-cattext mb-2">E-Mail</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							required
							class="text-cattext w-full px-4 py-3 border border-cattext rounded-lg focus:ring-2 focus:ring-catblue focus:border-transparent transition-colors"
							placeholder="your.email@example.com"
						/>
					</div>
				</div>

				<div>
					<label for="subject" class="block text-sm font-medium text-cattext mb-2">Subject</label>
					<input
						type="text"
						id="subject"
						bind:value={formData.subject}
						required
						class="text-cattext w-full px-4 py-3 border border-cattext rounded-lg focus:ring-2 focus:ring-catblue focus:border-transparent transition-colors"
						placeholder="What is it about?"
					/>
				</div>

				<div>
					<label for="message" class="block text-sm font-medium text-cattext mb-2"
						>Message</label
					>
					<textarea
						id="message"
						bind:value={formData.message}
						required
						rows="5"
						class="text-cattext w-full px-4 py-3 border border-cattext rounded-lg focus:ring-2 focus:ring-catblue focus:border-transparent transition-colors resize-none"
						placeholder="Tell me about your project..."
					></textarea>
				</div>

				{#if submitMessage}
					<div class="p-4 bg-catgreen border border-catsurface text-catsurface rounded-lg">
						{submitMessage}
					</div>
				{/if}

				{#if errorMessage}
					<div class="bg-catmauve border border-catsurface text-catsurface px-4 py-3 rounded-lg">
						{errorMessage}
					</div>
				{/if}
			</form>
		</div>

		<div class="text-center mt-8">
			<button
				form="contactForm"
				type="submit"
				disabled={isSubmitting}
				class="bg-catblue hover:bg-catsurface text-catsurface hover:text-catblue px-16 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
			>
				{#if isSubmitting}
					Sending...
				{:else}
					Send Message
				{/if}
			</button>
		</div>
	</div>
</section>
