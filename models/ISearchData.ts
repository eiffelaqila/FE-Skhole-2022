import IMataPelajaran from "./IMataPelajaran";
import IMateri from "./IMateri";

export default interface ISearchData {
    mata_pelajaran: IMataPelajaran[] | [];
    materi: IMateri[] | [];
}