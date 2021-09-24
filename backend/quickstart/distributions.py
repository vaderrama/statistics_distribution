from numpy import random


continuous_distributions  = ['alpha','anglit','argus','beta','bradford','burr','burr12','cauchy','chi','chi2','cosine','crystalball','dgamma','dweibull','erlang','expon','exponnorm','exponweib','exponpow','f','fatiguelife','fisk','foldcauchy','foldnorm','genlogistic','gennorm','genpareto',]

discrete_distributions = ['bernoulli','betabinom','boltzmann','dlaplace','geom','nchypergeom_wallenius','planck','poisson','randint','skellam','yulesimon']



def getContinuosDistributions():
    return continuous_distributions

def getDiscreteDistributions():
    return discrete_distributions

def parameter():
    return random.randint(20)
