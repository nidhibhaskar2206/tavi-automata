// components/workspace/MemberFilter.tsx
type Member = { id: string; name: string };

type Props = {
  members: Member[];
  selectedMembers: string[];
  onChange: (members: string[]) => void;
};

export default function MemberFilter({ members, selectedMembers, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === '') return;
    
    const newSelected = selectedMembers.includes(value)
      ? selectedMembers.filter(id => id !== value)
      : [...selectedMembers, value];
    onChange(newSelected);
  };

  return (
    <div className="relative">
      <select
        multiple
        size={members.length}
        value={selectedMembers}
        onChange={handleChange}
        className="w-[220px] h-20 rounded-xl border-2 border-[var(--brand-teal)]/30 bg-[var(--brand-dark)]/70 px-4 py-3 text-sm font-medium text-[var(--brand-ice)] focus:border-[var(--brand-teal)] focus:ring-2 focus:ring-[var(--brand-teal)]/30 shadow-glass resize-none appearance-none"
      >
        {members.map(member => (
          <option key={member.id} value={member.id}>
            {member.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg className="h-4 w-4 text-[var(--brand-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </div>
    </div>
  );
}
