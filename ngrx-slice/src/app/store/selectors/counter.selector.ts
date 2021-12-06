/* Read state from store */
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ICounterState} from "../state/counter.state";
import {FEATURE_NAME} from "../../app.const";


/* what did it do ? why i used ?*/
/*In documents of NgRx:
* The createFeatureSelector is a convenience method for returning a top level feature state. It returns a typed selector function for a feature slice of state
* */
/*lay ra cap cao nhat cua feature state, o day la counter
* nghia la o day minh da lay duoc store.counter
* */
/*o day ta can de y den featureName: 'counter', cai feature name nay se duoc su dung la o ben app.module.ts */
export const counterFeatureSelector = createFeatureSelector<ICounterState>(FEATURE_NAME)


/*tra loi cho cau hoi ben duoi*/
/*lay ra cap tiep theo cua phan manh counter
* nghia la minh can lay duoc value trong cai CounterState nay
* */
export const selectValueCounterState = createSelector(
  counterFeatureSelector,
  counterState => counterState.value
)

export const selectIncrementCounterState = createSelector(
  counterFeatureSelector,
  counterState => counterState.incrementCount
)

export const selectDecrementCounterState = createSelector(
  counterFeatureSelector,
  counterState => counterState.decrementCount
)

/*
* Chung ta can biet duoc trong cuc store trong mo hinh cua ngrx
* la mot cuc object duy nhat, trong cuc object nay se co nhieu phan manh
* Store: {
*   counter: {}, //o vi du nay, thi trong counter lai co ICounterState {value: number, incrementCount: number, decrementCount: number}, cau hoi dat ra o day ? lam sao ma minh co the lay ra duoc 3 thang nay ?
*   auth: {},
*   products: {},
*   orders: {},
*   users: {},
* }*/
