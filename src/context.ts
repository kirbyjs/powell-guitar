import { createContextId } from "@builder.io/qwik";
import { LandingPageStore } from "~/types/contentful";

export const landingCxt = createContextId<LandingPageStore>("entryCxt");
