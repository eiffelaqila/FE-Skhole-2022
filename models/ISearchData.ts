import IMataPelajaran from "./IMataPelajaran";
import IMateriMataPelajaran from "./IMateriMataPelajaran";

export default interface ISearchData {
    mata_pelajaran: IMataPelajaran[] | [];
    materi: IMateriMataPelajaran[] | [];
}