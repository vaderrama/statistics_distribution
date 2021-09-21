from numpy import random


continuous_distributions  = ['alpha','anglit','arcsine','argus','beta','betaprime','bradford','burr','burr12','cauchy','chi','chi2','cosine','crystalball','dgamma','dweibull','erlang','expon','exponnorm','exponweib','exponpow','f','fatiguelife','fisk','foldcauchy','foldnorm','genlogistic','gennorm','genpareto',]

discrete_distributions = ['bernoulli','betabinom','binom','boltzmann','dlaplace','geom','hypergeom','logser','nbinom','nchypergeom_fisher','nchypergeom_wallenius','nhypergeom','planck','poisson','randint','skellam','yulesimon','zipf','zipfian']



def getContinuosDistributions():
    return continuous_distributions

def getDiscreteDistributions():
    return discrete_distributions

def parameter():
    return random.randint(20)
