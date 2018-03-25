package shoppinglist.bindingModel;

import javax.validation.constraints.NotNull;

public class ProductBindingModel {
	@NotNull
    private Integer priority;

	@NotNull
    private String name;

	@NotNull
    private Integer quantity;

	@NotNull
    private String status;

    public ProductBindingModel(Integer priority, String name, Integer quantity, String status) {
        this.priority = priority;
        this.name = name;
        this.quantity = quantity;
        this.status = status;
    }

    public ProductBindingModel() {
    }

    public Integer getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        priority = priority;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        name = name;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        quantity = quantity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        status = status;
    }
}
