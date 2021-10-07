import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';
import { HomeEffects } from './state/home.effects';
import { EffectsModule } from '@ngrx/effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { HomePage } from './containers/home/home.page';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';

@NgModule({
  declarations: [HomePage, CurrentWeatherComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
  ],
})
export class HomeModule {}
