import { useSearchParams } from "react-router-dom";
// import getWorkout from "../utils/selectWorkout";
import formattingRules from "../utils/formattingRules";
import classification from "../utils/classification";

import workoutData from '../rules/workout_program.json';
import { useEffect, useState } from "react";

// Function to get the workout based on the program
const getWorkout = (program) => {
  switch (program) {
    case 'strength':
      return workoutData.muscle_strength;
    case 'lose_fat':
      return workoutData.lose_fat;
    default:

      return [];
  }
};

export default function WorkRecom() {
  const [searchParams,] = useSearchParams();
  const [res, setRes] = useState("");
  const [newFormat, setnewFormat] = useState("");
  const program = searchParams.get('wo');

  const age = searchParams.get('age');
  const gender = searchParams.get('gender') === "Male" ? "pria" : "wanita";
  const bmi = searchParams.get('bmi');

  const selectedWorkout = getWorkout(program);
  useEffect(()=>{
    const neFormat = formattingRules(age, gender, bmi);
    const result = classification(neFormat);
    setRes(result)
  },[])

  return (
    <section className="bg-black">
      <div className=" py-10">
        <div className="container flex flex-col items-center px-4 py-8  mx-auto text-center  md:py-16 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold sm:text-6xl xl:max-w-md text-white">
            Some workout{' '}
            {/* <span className="text-red-500">
              recomended for you {newFormat}{res}<br />{' '}
            </span> */}
            <span className="text-red-500">
              recomended for you<br />
            </span>
          </h1>
        </div>
        <div className="flex md:flex-row flex-wrap start flex-col overflow-hidden mx-auto p-4 items-center justify-center">
          {selectedWorkout.map((workout) => (
            <a href="#" className="block py-4">
              <iframe title="Giphy" src={workout.gif_url} width="400" height="200" className="giphy-embed" allowFullScreen></iframe>

              <div className="mt-4 sm:flex sm:items-center sm:justify-center text-white sm:gap-4">
                <strong className="font-medium">{workout.name}</strong>

                <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p className="mt-0.5 opacity-50 sm:mt-0">
                  {res === 'kecil'
                    ? `${workout.sets - 1} set${workout.sets > 2 ? 's' : ''} of ${workout.repetitions - 3} reps`
                    : (res === 'berat'
                      ? `${workout.sets + 1} set${workout.sets > 0 ? 's' : ''} of ${workout.repetitions + 3} reps`
                      : `${workout.sets} set${workout.sets > 1 ? 's' : ''} of ${workout.repetitions} reps`
                    )
                  }
                </p>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}