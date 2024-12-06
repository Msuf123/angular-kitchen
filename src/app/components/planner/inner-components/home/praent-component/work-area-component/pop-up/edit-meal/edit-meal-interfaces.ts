export interface FormStructure {
    lable?: string | null | undefined;
    timeBefore?: FormStructureTime | null | undefined;
    timeOnEat?: FormStructureTime | null | undefined;
    foods?: string | null | undefined;
    totalCaloreis?: string | null | undefined;
}

export interface FormStructureTime {
    hours?: string | null | undefined;
    minutes?: string | null | undefined;
    period?:period
}
export type period="A.M"|"P.M"