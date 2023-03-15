import { createContextId } from '@builder.io/qwik';
import { FooterStore, LandingPageStore } from '~/types/contentful';
import { gqlResponse } from '~/hooks/gql';

export const landingCxt =
  createContextId<gqlResponse<LandingPageStore>>('entryCxt');
export const footerCxt = createContextId<gqlResponse<FooterStore>>('entryCxt');
