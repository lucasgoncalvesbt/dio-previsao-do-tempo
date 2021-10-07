import { createAction, props } from "@ngrx/store";

export const loadCurrentWeather = createAction(
  '[Home] Load Current Wather',
  props<{  query: string }>(),
);

export const loadCurrentWeatherSuccess = createAction(
  '[Wather API] Load Current Wather Success',
  props<{ entity: any }>(),
);

export const loadCurrentWeatherFailed = createAction(
  '[Wather API] Load Current Wather Failed'
)
