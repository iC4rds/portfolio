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
				'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
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
			errorMessage = 'Bitte geben Sie Ihren Namen ein.';
			return false;
		}

		if (!formData.email.trim()) {
			errorMessage = 'Bitte geben Sie Ihre E-Mail Adresse ein.';
			return false;
		}

		if (!formData.subject.trim()) {
			errorMessage = 'Bitte geben Sie einen Betreff ein.';
			return false;
		}

		if (!formData.message.trim()) {
			errorMessage = 'Bitte geben Sie eine Nachricht ein.';
			return false;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			errorMessage = 'Bitte geben Sie eine gültige E-Mail Adresse ein.';
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
				submitMessage = 'Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.';
				formData = { name: '', email: '', subject: '', message: '' };

				setTimeout(() => {
					submitMessage = '';
				}, 5000);
			} else {
				errorMessage = result.error || 'Fehler beim Senden der Nachricht.';
				setTimeout(() => {
					errorMessage = '';
				}, 5000);
			}
		} catch (error) {
			throw new Error('Netzwerkerror: ' + error);
		}
	}
</script>

<section id="contact" class="py-20 bg-catbase">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-cattext mb-4">Kontakt</h2>
			<div class="w-24 h-1 bg-catblue mx-auto mb-6"></div>
		</div>

		<div class="grid lg:grid-cols-2 gap-12">
			<div class="space-y-8">
				<div>
					<h3 class="text-2xl font-bold text-cattext mb-6">Hier kann man mich erreichen</h3>
				</div>

				<div class="space-y-6">
					<div class="flex items-center space-x-4">
						<div class="w-12 h-12 bg-catblue rounded-full flex items-center justify-center">
							<svg
								class="w-6 h-6 text-catsurface"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="font-semibold text-cattext">E-Mail</h4>
							<p class="text-cattext">david-staudacher@outlook.de</p>
						</div>
					</div>

					<div class="flex items-center space-x-4">
						<div class="w-12 h-12 bg-catblue rounded-full flex items-center justify-center">
							<svg
								class="w-6 h-6 text-catsurface"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="font-semibold text-cattext">Telefon</h4>
							<p class="text-cattext">+49 123 456 7890</p>
						</div>
					</div>

					<div class="flex items-center space-x-4">
						<div class="w-12 h-12 bg-catblue rounded-full flex items-center justify-center">
							<svg
								class="w-6 h-6 text-catsurface"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="font-semibold text-cattext">Standort</h4>
							<p class="text-cattext">Ravensburg, Deutschland</p>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-catsurface p-8 rounded-2xl shadow-lg">
				<form onsubmit={handleSubmit} class="space-y-6">
					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<label for="name" class="block text-sm font-medium text-cattext mb-2">Name</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								class="text-cattext w-full px-4 py-3 border border-cattext rounded-lg focus:ring-2 focus:ring-catblue focus:border-transparent transition-colors"
								placeholder="Ihr Name"
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
								placeholder="ihre.email@beispiel.com"
							/>
						</div>
					</div>

					<div>
						<label for="subject" class="block text-sm font-medium text-cattext mb-2">Betreff</label>
						<input
							type="text"
							id="subject"
							bind:value={formData.subject}
							required
							class="text-cattext w-full px-4 py-3 border border-cattext rounded-lg focus:ring-2 focus:ring-catblue focus:border-transparent transition-colors"
							placeholder="Worum geht es?"
						/>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium text-cattext mb-2"
							>Nachricht</label
						>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="5"
							class="text-cattext w-full px-4 py-3 border border-cattext rounded-lg focus:ring-2 focus:ring-catblue focus:border-transparent transition-colors resize-none"
							placeholder="Erzählen Sie mir von Ihrem Projekt..."
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

					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full bg-catblue hover:bg-catbase disabled:bg-blue-400 text-catsurface hover:text-catblue py-4 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
					>
						{#if isSubmitting}
							<svg
								class="animate-spin -ml-1 mr-3 h-5 w-5 text-catsurface"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Wird gesendet...
						{:else}
							Nachricht senden
						{/if}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>
