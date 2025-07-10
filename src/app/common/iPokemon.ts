export interface Pokemon {
    id:          number;
    name:        string;
    category_id: number[] | null;
    parent:      number | null;
    photo:       string;
}
