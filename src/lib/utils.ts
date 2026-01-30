export function formatDate(date?:string){
    if(!date) return "";
    try {
        return new Date(date).toLocaleDateString();
    } catch {
        return "";
    }
}