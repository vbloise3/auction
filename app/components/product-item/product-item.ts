/**
 * Created by vincebloise on 12/22/16.
 */
import {Component, Input} from '@angular/core';
import {Product} from '../../services/product-service';

@Component({
    selector: 'auction-product-item',
    templateUrl: 'app/components/product-item/product-item.html'
})
export default class ProductItemComponent {
    @Input() product: Product;
}