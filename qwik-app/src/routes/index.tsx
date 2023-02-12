import {component$, useClientEffect$} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import SugarProvider from "../../../SugarProvider";

export default component$(() => {
  const spoon = SugarProvider.getSpoon();
  return (
      <div>
        {spoon}
      </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
