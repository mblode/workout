import { Area } from 'https://deno.land/x/alosaur/src/mod.ts';
import { ExerciseController } from './exercise.controller.ts';
import { RoutineController } from './routine.controller.ts';
import { WorkoutController } from './workout.controller.ts';

@Area({
    controllers: [ExerciseController, RoutineController, WorkoutController],
})
export class ApiArea {}
