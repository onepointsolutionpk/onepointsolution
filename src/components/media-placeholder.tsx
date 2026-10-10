import { ImageIcon } from "lucide-react";
export function MediaPlaceholder({ label }: { label: string }) { return <div className="grid aspect-[4/3] w-full place-items-center border border-border bg-surface"><div className="text-center text-muted-foreground"><ImageIcon className="mx-auto mb-3 size-7" /><span className="text-sm font-semibold">{label}</span></div></div>; }
