// When switching to City

// Save prison job
const prisonJobs = [Guard,Medic];

const currentJob = member.roles.cache.find(r =>
    prisonJobs.includes(r.id)
);

if (currentJob) {
    userData[user.id].prison = currentJob.id;
}

// Remove Prison roles
await member.roles.remove(prisonJobs);
await member.roles.remove(PrisonMember);

// Add City member
await member.roles.add(cityMember);

// Restore City job
if (userData[user.id].city) {
    await member.roles.add(userData[user.id].city);
}
