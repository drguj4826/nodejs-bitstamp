const ipRateLimit = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: { ip: N1 },
  });
  
  const idRateLimit = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: { id: N2 },
  });