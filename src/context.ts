import { createContextId } from '@builder.io/qwik';
import type {
  AboutPageStore,
  EventsStore,
  FooterStore,
  GuitarLessonsStore,
  GuitarRepairStore,
  LandingPageStore,
  ResourcesStore,
} from '~/types/contentful';
import type { gqlResponse } from '~/hooks/gql';
import type { HeaderContext } from '~/types/header';

export const landingCxt =
  createContextId<gqlResponse<LandingPageStore>>('landingCxt');
export const aboutCxt =
  createContextId<gqlResponse<AboutPageStore>>('aboutCxt');
export const guitarLessonsCxt =
  createContextId<gqlResponse<GuitarLessonsStore>>('guitarLessonsCxt');
export const eventsCxt = createContextId<gqlResponse<EventsStore>>('eventsCxt');
export const guitarRepairCxt =
  createContextId<gqlResponse<GuitarRepairStore>>('repairsCxt');
export const resourcesCxt =
  createContextId<gqlResponse<ResourcesStore>>('resourcesCxt');
export const footerCxt = createContextId<gqlResponse<FooterStore>>('footerCxt');
export const headerCxt = createContextId<HeaderContext>('headerCxt');
