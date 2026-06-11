// When switching to City

// Save Fallout job
const falloutJobs = [doctorRole, raiderRole, traderRole];

const currentJob = member.roles.cache.find(r =>
    falloutJobs.includes(r.id)
);

if (currentJob) {
    userData[user.id].fallout = currentJob.id;
}

// Remove Fallout roles
await member.roles.remove(falloutJobs);
await member.roles.remove(falloutMemberRole);

// Add City member
await member.roles.add(cityMemberRole);

// Restore City job
if (userData[user.id].city) {
    await member.roles.add(userData[user.id].city);
}
