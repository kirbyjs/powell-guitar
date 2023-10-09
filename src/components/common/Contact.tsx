import {
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from '@builder.io/qwik';
import Button from '~/components/common/Button';
import axios from 'axios';

type EmailForm = {
  name?: string;
  email?: string;
  message?: string;
  wasFormSuccessful: boolean;
  wasHCaptchaIgnored: boolean;
  wasFormSparkErrorThrown: boolean;
};

export default component$(() => {
  const formRef = useSignal<HTMLFormElement>();
  const hcaptchaRef = useSignal<HTMLDivElement>();
  const store = useStore<EmailForm>({
    wasFormSuccessful: false,
    wasHCaptchaIgnored: false,
    wasFormSparkErrorThrown: false,
  });

  useVisibleTask$(({ track }) => {
    track(() => hcaptchaRef.value);

    if (hcaptchaRef.value) {
      hcaptcha.render(hcaptchaRef.value, {
        sitekey: 'c37105e1-5acf-46a1-9d3a-9b48cdf5517e',
      });
    }
  });

  return (
    <form ref={formRef} class="space-y-8">
      {store.wasFormSuccessful && (
        <div class="text-green-600">
          Your email was successfully received! We will get back to your shortly
          about your message.
        </div>
      )}
      <div>
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
          required
          value={store.name}
          onChange$={(e) => {
            store.name = e.target.value;
          }}
        />
      </div>
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
          required
          value={store.email}
          onChange$={(e) => {
            store.email = e.target.value;
          }}
        />
      </div>
      <div class="sm:col-span-2">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Leave a comment..."
          value={store.message}
          onChange$={(e) => {
            store.message = e.target.value;
          }}
        ></textarea>
      </div>
      <span class="text-red-700">
        {store.wasHCaptchaIgnored && (
          <span class="block pt-5">Please verify that you're not a robot.</span>
        )}
        {store.wasFormSparkErrorThrown && (
          <span class="block pt-5">
            We are having a little trouble with our email server, try again in 5
            minutes.
          </span>
        )}
      </span>
      <div ref={hcaptchaRef} class="md:float-left" />
      <Button
        type="submit"
        class="md:float-right py-3 px-5"
        preventdefault:click
        onClick$={(e) => {
          const isValid = formRef.value?.checkValidity();
          const token = hcaptcha.getResponse();

          if (!isValid) {
            formRef.value?.reportValidity();
          } else if (!token) {
            store.wasHCaptchaIgnored = true;
          } else {
            store.wasHCaptchaIgnored = false;
            store.wasFormSparkErrorThrown = false;
            axios
              .post('https://submit-form.com/tzvC84ra', {
                email: store.email,
                name: store.name,
                message: store.message,
                'h-captcha-response': token,
              })
              .then(() => {
                store.name = '';
                store.email = '';
                store.message = '';
                store.wasFormSuccessful = true;
              })
              .catch((e) => {
                store.wasFormSparkErrorThrown = true;
              });
          }
        }}
      >
        Send message
      </Button>
    </form>
  );
});
